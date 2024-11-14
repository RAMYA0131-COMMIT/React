function ChildTwo(){
    return(
        <div>
            <h1>Child 2</h1>
            <GrandChild/>
        </div>
    )
}

function GrandChild(){
    return(
        <div>
            <h1>Grand Child 2</h1>
            <GreatGrandChildOne/>
            <GreatGrandChildTwo/>
        </div>
    )
}

function GreatGrandChildOne(){
    return(
        <div>
            <h1>Great Grand child 1</h1>
        </div>
    )
}

function GreatGrandChildTwo(){
    return(
        <div>
            <h1>Great Grand Child 2</h1>
        </div>
    )
}
 export default ChildTwo