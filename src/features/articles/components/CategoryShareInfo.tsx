import { Button, Card, Group, Space, Stack, Text } from '@mantine/core';
import {
  categoryTable,
  databaseCategories,
  frameworkCategories,
  infraCategories,
  languageCategories,
  otherCategories,
  platformCategories,
  toolsCategories,
} from 'config';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryShareInfo = () => {
  const navigate = useNavigate();
  return (
    <Stack className="w-1/4">
      <Card p="lg" withBorder>
        <Text className="text-lg font-bold">プログラミング言語</Text>
        <Space h={20} />
        <Group spacing="xs">
          {languageCategories.map((path) => (
            <Button
              key={path}
              onClick={() => navigate(`/categories/${path}/all`)}
              className="bg-m_gray-1 text-m_dark-3 hover:bg-m_gray-2"
              radius="xl"
              compact
            >
              {'#' + categoryTable.get(path)}
            </Button>
          ))}
        </Group>
      </Card>
      <Card withBorder p="lg">
        <Text className="text-lg font-bold">フレームワーク・ライブラリ</Text>
        <Space h={20} />
        <Group spacing="xs">
          {frameworkCategories.map((path) => (
            <Button
              key={path}
              onClick={() => navigate(`/categories/${path}/all`)}
              className="bg-m_gray-1 text-m_dark-3 hover:bg-m_gray-2"
              radius="xl"
              compact
            >
              {'#' + categoryTable.get(path)}
            </Button>
          ))}
        </Group>
      </Card>
      <Card withBorder p="lg">
        <Text className="text-lg font-bold">データベース</Text>
        <Space h={20} />
        <Group spacing="xs">
          {databaseCategories.map((path) => (
            <Button
              key={path}
              onClick={() => navigate(`/categories/${path}/all`)}
              className="bg-m_gray-1 text-m_dark-3 hover:bg-m_gray-2"
              radius="xl"
              compact
            >
              {'#' + categoryTable.get(path)}
            </Button>
          ))}
        </Group>
      </Card>
      <Card withBorder p="lg">
        <Text className="text-lg font-bold">インフラ</Text>
        <Space h={20} />
        <Group spacing="xs">
          {infraCategories.map((path) => (
            <Button
              key={path}
              onClick={() => navigate(`/categories/${path}/all`)}
              className="bg-m_gray-1 text-m_dark-3 hover:bg-m_gray-2"
              radius="xl"
              compact
            >
              {'#' + categoryTable.get(path)}
            </Button>
          ))}
        </Group>
      </Card>
      <Card withBorder p="lg">
        <Text className="text-lg font-bold">プラットフォーム</Text>
        <Space h={20} />
        <Group spacing="xs">
          {platformCategories.map((path) => (
            <Button
              key={path}
              onClick={() => navigate(`/categories/${path}/all`)}
              className="bg-m_gray-1 text-m_dark-3 hover:bg-m_gray-2"
              radius="xl"
              compact
            >
              {'#' + categoryTable.get(path)}
            </Button>
          ))}
        </Group>
      </Card>
      <Card withBorder p="lg">
        <Text className="text-lg font-bold">便利ツール</Text>
        <Space h={20} />
        <Group spacing="xs">
          {toolsCategories.map((path) => (
            <Button
              key={path}
              onClick={() => navigate(`/categories/${path}/all`)}
              className="bg-m_gray-1 text-m_dark-3 hover:bg-m_gray-2"
              radius="xl"
              compact
            >
              {'#' + categoryTable.get(path)}
            </Button>
          ))}
        </Group>
      </Card>
      <Card withBorder p="lg">
        <Text className="text-lg font-bold">その他</Text>
        <Space h={20} />
        <Group spacing="xs">
          {otherCategories.map((path) => (
            <Button
              key={path}
              onClick={() => navigate(`/categories/${path}/all`)}
              className="bg-m_gray-1 text-m_dark-3 hover:bg-m_gray-2"
              radius="xl"
              compact
            >
              {'#' + categoryTable.get(path)}
            </Button>
          ))}
        </Group>
      </Card>
    </Stack>
  );
};

export default CategoryShareInfo;
