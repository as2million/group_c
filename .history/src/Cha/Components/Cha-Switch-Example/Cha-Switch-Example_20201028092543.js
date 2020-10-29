function JessListA() {
    // Acomponent
    const ComponentA = (props) => {
      return (
        <div className="container component mt-5 row justify-content-between jess-productTab">
          <table class="table table-striped jess-table col-4">
            <thead>
              <tr>
                <th scope="col">配 菜</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>義式烘蛋</td>
              </tr>
              <tr>
                <td>蠔油高麗菜</td>
              </tr>
              <tr>
                <td>香烤時蔬</td>
              </tr>
              <tr>
                <td>蒜香空心菜</td>
              </tr>
              <tr>
                <td>點點藜麥飯(50%)</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-striped jess-table col-6">
            <thead>
              <tr>
                <th scope="col">配 菜</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>黑胡椒香蒜舒肥雞</td>
                <td>原味時代股份有限公司</td>
              </tr>
              <tr>
                <td>高麗菜</td>
                <td>朝敏菓菜行</td>
              </tr>
              <tr>
                <td>芋香白米</td>
                <td>朝敏菓菜行</td>
              </tr>
              <tr>
                <td>雞蛋</td>
                <td>上田企業社</td>
              </tr>
              <tr>
                <td>冷凍綠花椰菜</td>
                <td>勤億蛋品</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  
    // Bコンポーネント
    const ComponentB = (props) => {
      return (
        <div class="component">
          <h1>This component is</h1>
          <p>Show this component which on click tab-{props.name}.</p>
        </div>
      )
    }
  
    // タブメニューをアクティブ・ディアクティブにする関数
    const setTabActive = (addElem, removeName) => {
      let removeTargets = document.querySelectorAll(removeName)
      removeTargets.forEach((target) => {
        target.classList.remove('active')
      })
  
      addElem.classList.add('active')
    }
  
    const TabMenu = () => {
      const [component, setComponent] = React.useState(<ComponentA />)
  
      const tabContentA = (e) => {
        setTabActive(e.target, '.jess-productTabMenu__item')
        setComponent(<ComponentA name="Hi" />)
      }
  
      const tabContentB = (e) => {
        setTabActive(e.target, '.jess-productTabMenu__item')
        setComponent(<ComponentB name="B" />)
      }
      return (
        <div className="container mt-5">
          <div className="jess-productTab">
            <ul className="jess-productTabMenu d-flex  justify-content-center">
              <li
                className="jess-productTabMenu__item active"
                onClick={tabContentA}
              >
                今日菜色
              </li>
              <li className="jess-productTabMenu__item" onClick={tabContentB}>
                營養標示
              </li>
            </ul>
            <div className="jess-productTabBorder"></div>
            <div className="jess-product-Tab1 d-flex ">{component}</div>
          </div>
        </div>
      )
    }
  
    return (
      <>
        <TabMenu />
      </>
    )
  }
  
  export default JessListA