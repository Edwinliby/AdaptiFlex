"use client";

import { useEffect, useState } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, lightDefaultTheme, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import * as Y from "yjs";
import LiveblocksProvider from "@liveblocks/yjs";
import { useRoom, useSelf } from "@/liveblocks.config";

import { Info } from "./info";
import { Participants } from "./participants";
import { connectionIdToColor } from "@/lib/utils";

import { WhiteBoard } from "./whiteBoard";

interface CanvasProps {
    doc: Y.Doc,
    provider: any;
    boardId: string;
};

export default function Canvas({ boardId }: CanvasProps) {
    const room = useRoom();
    const [doc, setDoc] = useState<Y.Doc>();
    const [provider, setProvider] = useState<any>();

    // Set up Liveblocks Yjs provider
    useEffect(() => {
        const yDoc = new Y.Doc();
        const yProvider = new LiveblocksProvider(room, yDoc);
        setDoc(yDoc);
        setProvider(yProvider);

        return () => {
            yDoc?.destroy();
            yProvider?.destroy();
        };
    }, [room]);

    if (!doc || !provider) {
        return null;
    }

    return (
        <main className="w-full h-full relative">
            <Participants />
            <div className="flex  w-full h-full">
                <WhiteBoard boardId={boardId} />
                <BlockNote boardId={boardId} doc={doc} provider={provider} />
            </div>
        </main>
    );
}

async function uploadFile(file: File) {
    const body = new FormData();
    body.append("file", file);

    const ret = await fetch("https://tmpfiles.org/api/v1/upload", {
        method: "POST",
        body: body,
    });
    return (await ret.json()).data.url.replace(
        "tmpfiles.org/",
        "tmpfiles.org/dl/"
    );
}

function BlockNote({ doc, provider }: CanvasProps) {

    const currentUser = useSelf();
    const editor: BlockNoteEditor = useCreateBlockNote({
        collaboration: {
            provider,

            // Where to store BlockNote data in the Y.Doc:
            fragment: doc.getXmlFragment("document-store"),

            // Information for this user:
            user: {
                name: currentUser?.info?.name || "Anonymous",
                color: connectionIdToColor(currentUser?.connectionId),
            },
        },
        uploadFile,
    });

    return <BlockNoteView
        className="pt-[4rem] w-full overflow-scroll"
        theme={lightDefaultTheme}
        editor={editor}
    />;
}
