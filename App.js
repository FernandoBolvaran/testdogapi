import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexPage from "./pages/IndexPage";
import MascotaPage from "./pages/MascotaPage";
import ListaPage from "./pages/ListaPage";

const MyApp = createStackNavigator({
  Index: {
    screen: IndexPage,
  },
  Lista: {
    screen: ListaPage,
  },
  Raza: {
    screen: MascotaPage,
  },
});

export default createAppContainer(MyApp);
