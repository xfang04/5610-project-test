import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { Layout, Menu } from "antd";
import Search from "antd/es/input/Search";

const { Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <NavBar />
        <Layout>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              // items={items2}
            >
              <Search
                placeholder="input search text"
                onSearch={(value) => console.log(value)}
                style={{ width: 200 }}
              />
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MoviesList />} />
                <Route path="/add" element={<AddMovie />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
