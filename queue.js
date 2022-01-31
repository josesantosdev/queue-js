const Queue = () =>{
    data = []

    const add = (value) => {
        data.unshift(value)
    }
    const remove = () =>{
        if(data.length===0){
            return -1
        }
        const value = data[data.length-1]
        data.splice(data.length-1, 1)
        return value
    }
    const print = () => console.log(data)

    return{
        add,
        remove,
        print
    }

}

const queue = Queue()
queue.remove()