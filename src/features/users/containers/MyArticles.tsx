import { getBookmarks } from 'articles/api/getBookmarks';
import { getBookmarksLikes } from 'articles/api/getBookmarksLikes';
import { getLikes } from 'articles/api/getLikes';
import { Article } from 'articles/types';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserArticleLists from 'users/components/UserArticleLists';

const MyArticles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const params = useParams();

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const auth = getAuth();
        const idToken = await auth.currentUser?.getIdToken(true);

        const config = {
          headers: {
            authorization: `Bearer ${idToken}`,
          },
        };
        const bookmarkData = await getBookmarks(config);
        return bookmarkData;
      } catch (error: any) {
        throw new Error(`error \n ${error.message}`);
      }
    };
    const fetchLikes = async () => {
      try {
        const auth = getAuth();
        const idToken = await auth.currentUser?.getIdToken(true);

        const config = {
          headers: {
            authorization: `Bearer ${idToken}`,
          },
        };
        const likeData = await getLikes(config);
        return likeData;
      } catch (error: any) {
        throw new Error(`error \n ${error.message}`);
      }
    };
    const fetchBookmarksLikes = async () => {
      try {
        const auth = getAuth();
        const idToken = await auth.currentUser?.getIdToken(true);

        const config = {
          headers: {
            authorization: `Bearer ${idToken}`,
          },
        };
        const likeData = await getBookmarksLikes(config);
        return likeData;
      } catch (error: any) {
        throw new Error(`error \n ${error.message}`);
      }
    };

    setIsLoading(true);

    switch (params.tab) {
      case 'bookmarks':
        fetchBookmarks()
          .then((data) => {
            setIsLoading(false);
            const newArticles = data.data.map((article) => ({
              id: article.id,
              title: article.attributes.title,
              date: formatDistanceToNow(new Date(article.attributes.date), {
                addSuffix: true,
                locale: ja,
              }),
              media: {
                name: data.meta.media.name,
                image: data.meta.media.image,
              },
              image: article.attributes.image,
              link: article.attributes.link,
              categories: article.relationships.categories.data.flatMap(
                (category) => {
                  return data.included
                    .filter((includedData) => {
                      return includedData.id === category.id;
                    })
                    .map((data) => ({
                      title: data.attributes.name,
                      path: data.attributes.path,
                    }));
                }
              ),
            }));

            setArticleItems(newArticles);
          })
          .catch((error) => {
            setIsLoading(false);
            alert('記事情報の取得に失敗しました');
          })
          .finally(() => setIsLoading(false));
        break;
      case 'likes':
        fetchLikes()
          .then((data) => {
            setIsLoading(false);
            const newArticles = data.data.map((article) => ({
              id: article.id,
              title: article.attributes.title,
              date: formatDistanceToNow(new Date(article.attributes.date), {
                addSuffix: true,
                locale: ja,
              }),
              media: {
                name: data.meta.media.name,
                image: data.meta.media.image,
              },
              image: article.attributes.image,
              link: article.attributes.link,
              categories: article.relationships.categories.data.flatMap(
                (category) => {
                  return data.included
                    .filter((includedData) => {
                      return includedData.id === category.id;
                    })
                    .map((data) => ({
                      title: data.attributes.name,
                      path: data.attributes.path,
                    }));
                }
              ),
            }));

            setArticleItems(newArticles);
          })
          .catch((error) => {
            setIsLoading(false);
            alert('記事情報の取得に失敗しました');
          })
          .finally(() => setIsLoading(false));
        break;
      default:
        fetchBookmarksLikes()
          .then((data) => {
            setIsLoading(false);
            const newArticles = data.data.map((article) => ({
              id: article.id,
              title: article.attributes.title,
              date: formatDistanceToNow(new Date(article.attributes.date), {
                addSuffix: true,
                locale: ja,
              }),
              media: {
                name: data.meta.media.name,
                image: data.meta.media.image,
              },
              image: article.attributes.image,
              link: article.attributes.link,
              categories: article.relationships.categories.data.flatMap(
                (category) => {
                  return data.included
                    .filter((includedData) => {
                      return includedData.id === category.id;
                    })
                    .map((data) => ({
                      title: data.attributes.name,
                      path: data.attributes.path,
                    }));
                }
              ),
            }));

            setArticleItems(newArticles);
          })
          .catch((error) => {
            setIsLoading(false);
            alert('記事情報の取得に失敗しました');
          })
          .finally(() => setIsLoading(false));
        break;
    }
  }, [params.tab]);

  return (
    <>
      <UserArticleLists
        leftGenre="いいねした記事"
        rightGenre="ブックマークした記事"
        articleItems={articleItems}
        isLoading={isLoading}
      />
    </>
  );
};

export default MyArticles;
