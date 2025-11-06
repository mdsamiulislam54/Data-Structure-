
class UndoRedo {
    constructor(){
        this.undoStack=[];
        this.redoStack=[];
        this.text= '';
    }

    Type(newText){
        this.undoStack.push(this.text);
        this.text= newText;
        this.redoStack=[]
    }

    Undo(){
        this.redoStack.push(this.text);
        this.text= this.undoStack.pop();
    }

    Redo(){
        this.undoStack.push(this.text);
        this.text= this.redoStack.pop();
    }
    Show() {
    console.log("Current Text:", this.text);
  }
}

const  editor = new UndoRedo ();

editor.Type("Md")
editor.Type("Shamiul")
editor.Type("Islam")
editor.Undo()
editor.Redo()
editor.Show()