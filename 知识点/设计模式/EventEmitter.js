class EventEmitter {
    constructor() {
        this.eventMap = {};
    }

    sub(name,cb) {
        const eventList = this.evevtMap[name] = this.eventMap[name] || {};
        eventList.push(cb);
    }

    pub(name, ...data){
        (this.eventMap[name] || []).forEach(cb => {
            cb(...data);
        });
    }
}

class Child extends EventEmitter {
    constructor() {
        super();
        setTimeout(() => {
            this.pub('update')
        },2000)
    }
}

class Parent {
    constructor() {
        this.child = new Child();
        this.child.sub('update',function() {
            console.log('child update');
        })
    }
}

let parent = new Parent();