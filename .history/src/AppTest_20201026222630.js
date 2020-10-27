import React, { useState, useEffect } from 'react'
// import Counter from 'Cha/Components/Cha-Counter/Counter'
// import ScrollApp from 'Cha/Components/Cha-ToTop/ScrollApp'
// import ScrollArrow from 'Cha/Components/Cha-ToTop/ScrollArrow'
import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart'
// import ChaProgressBar from 'Cha/Components/Cha-ProgressBar/ChaProgressBar'

function AppTest() {
  return (
    <>
      {/* <Counter /> */}
      <ChaCart />
      {/* <ScrollArrow /> */}
      {/* <ScrollApp /> */}
      {/* <ChaProgressBar /> */}
    </>
  )
}

export default AppTest




function AppTest() {

  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <TodoAppPage todos={todos} setTodos={setTodos} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default AppTest