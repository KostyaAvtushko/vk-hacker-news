import { Div, Group, Paragraph, SimpleCell, Spinner, Tappable, Text } from "@vkontakte/vkui";
import styles from "./comments.module.scss";
import { Icon16Dropdown, Icon16DropdownFlipped } from "@vkontakte/icons";
import { normalizeString } from "../../../shared";
import { useState } from "react";
import { newsApi } from "../../../entities/news/model/newsApi";

interface CommentProps {
  id: number;
  parent?: string;
}

export function Comments({ kids } : {kids: number[]}) {

  return (
    <Group className={styles.comments}>
      
      {!!kids?.length && 
        <>
          <Text>Comments:</Text>
          {kids.map((kid) => <Comment key={crypto.randomUUID()} id={kid}/>)}
        </>
      }
    </Group>
  )
}

function Comment({ id, parent }: CommentProps) {
  const [expanded, setExpanded] = useState(false);
  const { data, isLoading } =  newsApi.useFetchItemQuery(id);

  return (
    <>
      {isLoading && <Spinner />}
      {data &&
        <SimpleCell 
          className={styles.comment}
          badgeBeforeTitle
        >
          <Div className={styles.comment__header}>
            <Text weight="1">{data.by}</Text>
            {parent && <Text weight="2">to {parent}</Text>}
          </Div>
          <Div className={styles.comment__text}>
            <Paragraph>{normalizeString(data.text || "")}</Paragraph>
          </Div>
          {!!data.kids?.length && 
            <Tappable 
              onClick={() => setExpanded(!expanded)}
              className={styles.comment__expand}
            >
              {expanded ? <Icon16DropdownFlipped /> : <Icon16Dropdown />}{data.kids.length} comments
            </Tappable>
          }
          {expanded && data.kids && 
            data.kids.map((comment: number) =>  <Comment key={crypto.randomUUID()} id={comment} parent={data.by}/>)
          } 
        </SimpleCell>
      }
    </>
  ) 
}
