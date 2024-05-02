import { Group, IconButton, NavIdProps, Panel, Spinner } from "@vkontakte/vkui";
import { NewsCard } from "../../../widgets/newsCard";
import styles from "./main.module.scss";
import { newsApi } from "../../../entities/news/model/newsApi";
import { useEffect, useState } from "react";
import { Icon28Replay } from "@vkontakte/icons";

export function Main({ id }: NavIdProps) {

  const { data, isLoading, refetch } = newsApi.useFetchLatestNewsQuery(null, { pollingInterval: 60000 });
  const [newsCount, setNewsCount] = useState(0);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (update) {
      setNewsCount(newsCount => newsCount + 10);
      setUpdate(false);
    }
  }, [newsCount, update])

  const scrollHander = (e: Event) => {
    const targetElement = (e.target as Document).documentElement;
    if (targetElement.scrollHeight - (targetElement.scrollTop + window.innerHeight) < 100 && newsCount < 100) {
      setUpdate(true);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', scrollHander);
    return () => {
      window.removeEventListener('scroll', scrollHander);
    }
  }, []);

  return (
    <Panel id={id}>
      <Group className={styles.news}>
        <IconButton onClick={refetch}>
          <Icon28Replay />
        </IconButton>

        {isLoading && <Spinner />}
        {data && data.slice(0, newsCount + 10).map((item) => (
          <NewsCard
            key={item} 
            id={item}
          />
        ))}
      </Group>
    </Panel>
  );
}
