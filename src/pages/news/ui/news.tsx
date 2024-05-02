import { Group, IconButton, InfoRow, Link, NavIdProps, Panel, SimpleCell, Spinner, Subhead, Title } from "@vkontakte/vkui";
import { Back } from "../../../features/back";
import styles from "./news.module.scss"
import { Comments } from "../../../widgets/comments";
import { timestampToDateTime } from "../../../shared";
import { useParams } from "@vkontakte/vk-mini-apps-router";
import { newsApi } from "../../../entities/news/model/newsApi";
import { Icon28Replay } from "@vkontakte/icons";

export function News({ id }: NavIdProps) {
  const params = useParams<'id'>();
  const { data, isLoading, refetch } =  newsApi.useFetchItemQuery(parseInt(params?.id || "1", 10));


  return (
    <Panel id={id}>
      <Group className={styles.news_header}>
        <Back />
        {isLoading && <Spinner />}
        {data &&
          <>
            <Title level="1">{data.title}</Title>
            <Subhead weight="1">
              {data.by}
            </Subhead>
            <Link href={data.url}>Link</Link>
            <SimpleCell multiline>
              <InfoRow header="Date">
                {timestampToDateTime(data.time).toString()}
              </InfoRow>
            </SimpleCell>
            <IconButton onClick={refetch}>
              <Icon28Replay />
            </IconButton>
          </>
        }
      </Group>
      {!!data?.kids && <Comments kids={[...data.kids]}/>}
    </Panel>
  );
}