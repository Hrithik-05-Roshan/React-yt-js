import React from 'react'

const App = () => {

  function btnclicked(){
    console.log('Hello')
  }

  function pagescrolling(){
    console.log("Scrolling");
    
  }

  function inputchange(val) {
    console.log(val)
  }

  return (
    <div>


      <button onClick={btnclicked}>Submit</button>


      <button onClick={(elem) => {                                    // onclick function
        console.log(elem.target)
      }}>Submit</button>


      <input onChange={(elem) => {                                      // Onchange function
        console.log(elem.target.value)
      }} type='text' placeholder='Enter the name' />

      <input
        onChange={function (elem) {
          inputchange(elem.target.value)
        }}
        type="text"
        placeholder='Enter Subject...' />

      <div className='box' onMouseMove={() => {
        console.log("Hope")
      }}
      >

      </div>

      <div onWheel={(elem) => {
        // console.log(elem.deltaY);
        
        pagescrolling(elem.deltaY);
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>

  )
}

export default App