import logo from './logo.svg';
import './App.css';
import SidebarLeft from './componentes/static/sidebar_left/SidebarLeft';
import SidebarRight from './componentes/static/sidebar_right/SidebarRght';
import Feed from './componentes/pages/feed/Feed';
import Stories from './componentes/pages/stories/Stories';


function App() {
  return (
    <div className="App">
      <div className='lateral_esquerda'>
        <SidebarLeft></SidebarLeft>
      </div>
      <div className='conteudo'>
        <div className='conteudo_central'>
          <Feed></Feed>
        </div>
        <div className='lateral_direita'>
          <SidebarRight></SidebarRight>
        </div>
      </div>
    </div>
  );
}

export default App;
