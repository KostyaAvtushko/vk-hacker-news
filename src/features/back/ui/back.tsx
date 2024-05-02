import { Icon20ArrowLeftOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { CellButton } from '@vkontakte/vkui';

export function Back() {
  const routeNavigator = useRouteNavigator();
  return (
    <CellButton 
      onClick={() => routeNavigator.back()}
      before={<Icon20ArrowLeftOutline />}
    />
  );
}