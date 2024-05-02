import { ContentCard, Spinner } from "@vkontakte/vkui";
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { newsApi } from "../../../entities/news/model/newsApi";
import { timestampToDateTime } from "../../../shared";

export interface NewsCardProps { 
  id: number;
}

export function NewsCard({ id }: NewsCardProps) {
  const {data, isLoading } = newsApi.useFetchItemQuery(id);
  const routeNavigator = useRouteNavigator();


  return (
    <>
      {isLoading && <Spinner />}
      {data && 
        <ContentCard
          style={{width: "100%"}}
          onClick={() => routeNavigator.push(`/news/${id}`)}
          header={data.title}
          subtitle={timestampToDateTime(data.time).toString()}
          caption={data.score}
          text={data.by}
        />
      }
    </>
  );
}