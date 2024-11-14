function ChildThree(){
    return(
        <div>
            <h1>Child 3</h1>
            <GrandChildOne/>
            <GrandChildTwo/>
        </div>
    )
}

function GrandChildOne(){
    return(
        <div>
            <h1>Grand child 1</h1>
        </div>
    )
}

function GrandChildTwo(){
    return(
        <div>
            <h1>Grand Child 2</h1>
        </div>
    )
}

export default ChildThree