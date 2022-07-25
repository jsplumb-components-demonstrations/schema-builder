import { newInstance } from "@jsplumb-components/schema"

const schema = newInstance({
    container:document.getElementById("container"),
    palette:{
        container:document.getElementById("palette")
    },
    inspector:{
        container:document.getElementById("inspector")
    },
    undoRedo:{
        undo:document.querySelector("[data-action='undo']"),
        redo:document.querySelector("[data-action='redo']")
    }
})

schema.loadUrl("../schema-1.json")
