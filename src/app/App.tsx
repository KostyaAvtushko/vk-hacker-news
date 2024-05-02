import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { DEFAULT_VIEW_PANELS } from '../routes';
import { Main } from '../pages/main';
import { News } from '../pages/news/';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.MAIN } = useActiveVkuiLocation();


  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <Main id="main"/>
          <News id="news"/>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
