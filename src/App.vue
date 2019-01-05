<template>
  <div id="app">

<Epic :activeStory="activeStory">
  <Tabbar slot="tabbar">
    <TabbarItem @click="activeStory = 'root1'" :selected="activeStory == 'root1'" label="1">
      <vkui-icon name="market_outline" size="24" />
    </TabbarItem>
    <TabbarItem @click="activeStory = 'root2'" :selected="activeStory == 'root2'">
      <vkui-icon name="user_outline" size="24" />
    </TabbarItem>
  </Tabbar>
  <Root id="root1" :activeView="activeView" key="root1">
    <VKView id="view11" :activePanel="activePanel" key="view11">
      <Panel id="panel111">
        <PanelHeader>
          Panel 1 1 1
        </PanelHeader>

        <Search v-model="search" theme="default">
          <div slot="after">Пас</div>
        </Search>

        <Group>
          <List>
            <Cell expandable @click="activePanel = 'panel112'">Panel 1 1 2</Cell>
            <Cell expandable @click="activeView = 'view12'">View 1 2</Cell>
          </List>
        </Group>
        <Group>
          <List>
            <Cell v-for="i in 100">{{ i }}</Cell>
          </List>
        </Group>
        <Group>
          <List>
            <Cell expandable @click="activePanel = 'panel112'">Panel 1 1 2</Cell>
            <Cell expandable @click="activeView = 'view12'">View 1 2</Cell>
          </List>
        </Group>
      </Panel>
      <Panel id="panel112">
        <PanelHeader>
          <HeaderButton slot="left" :primary="true" @click="activePanel = 'panel111'">Назад</HeaderButton>
          Panel 1 1 2
        </PanelHeader>
        <Group>
          <List>
            <Cell v-for="i in 20">{{ i }}</Cell>
          </List>
        </Group>
      </Panel>
    </VKView>
    <VKView id="view12" activePanel="panel121" key="view12">
      <Panel id="panel121">
        <PanelHeader>
          <HeaderButton slot="left" :primary="true" @click="activeView = 'view11'">Закрыть</HeaderButton>
          Panel 1 2 1
        </PanelHeader>
        <Group>
          <List>
            <Cell v-for="i in 20">{{ i }}</Cell>
          </List>
        </Group>
      </Panel>
    </VKView>
  </Root>
  <Root id="root2" activeView="view21" key="root2">
    <VKView id="view21" activePanel="panel211" key="view21">
      <Panel id="panel211">
        <PanelHeader>
          Panel 2 1 1
        </PanelHeader>
        <Group>
          <List>
            <Cell v-for="i in 20">{{ i }}</Cell>
          </List>
        </Group>
      </Panel>
    </VKView>
  </Root>
</Epic>  

  </div>
</template>

<script>
import Epic from './components/Epic/Epic'
import Root from './components/Root/Root'
import VKView from './components/VKView/VKView'
import Panel from './components/Panel/Panel'
import PanelHeader from './components/PanelHeader/PanelHeader'
import PanelHeaderContent from './components/PanelHeaderContent/PanelHeaderContent'
import Touch from './components/Touch/Touch'
import Tappable from './components/Tappable/Tappable'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import HeaderButton from './components/HeaderButton/HeaderButton'
import HeaderContext from './components/HeaderContext/HeaderContext'
import HorizontalScroll from './components/HorizontalScroll/HorizontalScroll'
import Group from './components/Group/Group'
import Gallery from './components/Gallery/Gallery'
import List from './components/List/List'
import Cell from './components/Cell/Cell'
import CellButton from './components/CellButton/CellButton'
import Checkbox from './components/Checkbox/Checkbox'
import Div from './components/Div/Div'
import ActionSheet from './components/ActionSheet/ActionSheet'
import ActionSheetItem from './components/ActionSheetItem/ActionSheetItem'
import Alert from './components/Alert/Alert'
import Avatar from './components/Avatar/Avatar'
import File from './components/File/File'
import FixedLayout from './components/FixedLayout/FixedLayout'
import Footer from './components/Footer/Footer'
import FormLayout from './components/FormLayout/FormLayout'
import FormLayoutGroup from './components/FormLayoutGroup/FormLayoutGroup'
import InfoRow from './components/InfoRow/InfoRow'
import Input from './components/Input/Input'
import Link from './components/Link/Link'
import Progress from './components/Progress/Progress'
import Radio from './components/Radio/Radio'
import ScreenSpinner from './components/ScreenSpinner/ScreenSpinner'
import Search from './components/Search/Search'
import Select from './components/Select/Select'
import SelectMimicry from './components/SelectMimicry/SelectMimicry'
import VKSwitch from './components/Switch/Switch'
import Tabs from './components/Tabs/Tabs'
import TabsItem from './components/TabsItem/TabsItem'
import Tabbar from './components/Tabbar/Tabbar'
import TabbarItem from './components/TabbarItem/TabbarItem'
import Slider from './components/Slider/Slider'


import '@urapywka/vkui-icons'
import '@urapywka/vkui-icons/dist/vkui-icons.css'

export default {
  name: 'app',
  data: () => ({
    activeStory: 'root1',
    activeView: 'view11',
    activePanel: 'panel111',
    popout2: false,
    contextOpened: false,
    progress: 10,
    sw1: false,
    sw2: true,
    radio1: "4",
    input: '',
    sex: undefined,
    slider: .5,
    search: 'test',
  }),
  components: {
    Epic,
    Root,
    VKView,
    Panel,
    PanelHeader,
    PanelHeaderContent,
    Touch,
    Tappable,
    Button,
    Header,
    HeaderButton,
    HeaderContext,
    HorizontalScroll,
    Group,
    Gallery,
    List,
    Cell,
    CellButton,
    Checkbox,
    Div,
    ActionSheet,
    ActionSheetItem,
    Alert,
    Avatar,
    File,
    FixedLayout,
    Footer,
    FormLayout,
    FormLayoutGroup,
    InfoRow,
    Input,
    Link,
    Progress,
    Radio,
    ScreenSpinner,
    Search,
    Select,
    SelectMimicry,
    VKSwitch,
    Tabs,
    TabsItem,
    Tabbar,
    TabbarItem,
    Slider,
  },
  methods: {
    test (e) {
      console.log("test", e)
    },
    openSheet () {
      this.popout2 = true;
    }
  }
}
</script>

<style>
@import './styles/common.css';
@import './styles/constants.css';
@import './styles/generated/palette.css';
@import './styles/generated/client_light.css';
/*@import './styles/generated/client_dark.css';*/

hr {
  border: none;
  border-bottom: 2px dashed #eee;
  margin: 40px 0;
}
</style>
