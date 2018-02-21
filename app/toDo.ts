class Task {
  done: boolean = false;
  // public description: string;
  // public priority: string;

  // constructor(descriptionParameter:string, priorityParameter:string){
  //   this.done=false;
  //   this.description=descriptionParameter;
  //   this.priority=priorityParameter;
  // }

  constructor(public description: string, public priority: string){}//alternate constructor pattern

  markDone(){
    this.done=true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes', 'Medium'));
tasks.push(new Task('Buy chocolate', 'Low'));
tasks.push(new Task('Do laundry', 'High'));

tasks[0].markDone();

for(var task of tasks){
  console.log(task);
}
