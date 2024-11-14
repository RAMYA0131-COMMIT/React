function ChildOne(){
    return (
        <div>
        <h1>child 1</h1>
        <GrandChild/>
        </div>
    )

}

function GrandChild(){
    return (
      <div>
          <h1>Grand child 1</h1>
      </div>
    )
}
export default ChildOne

