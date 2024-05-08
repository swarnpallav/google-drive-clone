import { Toaster } from "react-hot-toast";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb";
import FolderData from "./components/FolderData";
import Sidebar from "./components/Sidebar";
import UploadButton from "./components/UploadButton";
import { FolderDataProvider } from "./context/FolderDataContext";

function App() {
  return (
    <main className="main">
      <FolderDataProvider>
        <header className="header">
          <div className="headerContent">
            <img src="logo512.png" alt="header-logo" width={50} height={50} />
            <span>Drive</span>
          </div>
        </header>
        <div className="mid">
          <div className="leftSection">
            <UploadButton />
            <Sidebar />
          </div>
          <div className="rightSection">
            <Breadcrumb />
            <FolderData />
          </div>
        </div>
      </FolderDataProvider>
      <Toaster position="top-center" />
    </main>
  );
}

export default App;
