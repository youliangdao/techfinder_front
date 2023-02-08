export const endpoint =
  import.meta.env.VITE_APP_USE_MOCK_SERVER === 'true'
    ? import.meta.env.VITE_APP_MOCK_API_ENDPOINT
    : import.meta.env.VITE_APP_API_ENDPOINT;

export const categoryTable = new Map([
  ['ui', 'UI'],
  ['design', 'デザイン（Design）'],
  ['react', 'React'],
  ['github', 'GitHub'],
  ['javascript', 'JavaScript'],
  ['rails', 'Rails'],
  ['aws', 'AWS'],
  ['docker', 'Docker'],
  ['terraform', 'Terraform'],
  ['nuxtjs', 'Nuxt.js'],
  ['game', 'ゲーム'],
  ['まとめ', 'まとめ'],
  ['vue', 'Vue.js'],
  ['netlify', 'Netlify'],
  ['gatsby', 'Gatsby'],
  ['graphql', 'GraphQL'],
  ['php', 'PHP'],
  ['flutter', 'Flutter'],
  ['heroku', 'Heroku'],
  ['nestjs', 'NestJS'],
  ['python', 'Python'],
  ['スタートアップ', 'スタートアップ'],
  ['ruby', 'Ruby'],
  ['bot', 'bot'],
  ['googlemapsapi', 'GoogleMapsAPI'],
  ['gas', 'GAS'],
  ['ポエム', 'ポエム'],
  ['nextjs', 'Next.js'],
  ['vercel', 'Vercel'],
  ['chrome', 'Chrome拡張'],
  ['svg', 'SVG'],
  ['typescript', 'TypeScript'],
  ['django', 'Django'],
  ['gcp', 'GCP'],
  ['laravel', 'Laravel'],
  ['機械学習', '機械学習'],
  ['firebase', 'Firebase'],
  ['nodejs', 'Node.js'],
  ['英語', '英語'],
  ['失敗談', '失敗談'],
  ['swift', 'Swift'],
  ['アイデア', 'アイデア'],
  ['csharp', 'C#'],
  ['azure', 'Azure'],
  ['jquery', 'jQuery'],
  ['unity', 'Unity'],
  ['marketing', 'マーケティング'],
  ['pwa', 'PWA'],
  ['circleci', 'CircleCI'],
  ['twitter', 'Twitter'],
  ['css', 'CSS'],
  ['amplify', 'Amplify'],
  ['fargate', 'Fargate'],
  ['ecs', 'ECS'],
  ['nocode', 'ノーコード'],
  ['android', 'Android'],
  ['springboot', 'SpringBoot'],
  ['mysql', 'MySQL'],
  ['ios', 'iOS'],
  ['firestore', 'Firestore'],
  ['go', 'Go'],
  ['threejs', 'three.js'],
  ['stripe', 'Stripe'],
  ['others', 'その他'],
  ['line', 'LINE'],
  ['supabase', 'Supabase'],
  ['cloudflare', 'Cloudflare'],
  ['rust', 'Rust'],
  ['wasm', 'WebAssembly'],
  ['auth0', 'Auth0'],
  ['prisma', 'Prisma'],
  ['svelte', 'Svelte'],
  ['html', 'HTML'],
  ['slack', 'Slack'],
  ['api', 'API'],
]);

export const categoryImageTable = new Map([
  [
    'ui',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e03cfa97cf725704c66346a6f8e6d34597eed8f5/large.jpg?1456896117',
  ],
  [
    'design',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/2016b4b9f5ff5598e25abb7d63ec2f1cbd8711e4/large.jpg?1501236549',
  ],
  [
    'react',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/a3c193a7d59077dd85f9ab012ee00621bef7be8c/large.jpg?1596705704',
  ],
  [
    'github',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/2a78e2d37f5a47d220344133dc765b8250a75b7e/large.jpg?1569219548',
  ],
  [
    'javascript',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/c7f37896cc1df20e3da5a35c8b3eb9c959119d0a/large.jpg?1650353657',
  ],
  [
    'rails',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/638734b4ad8352b0c86ec274e348e5e1902c5948/large.jpg?1650353426',
  ],
  [
    'aws',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/92f64a955408071dd28788777aa89ff331754829/large.jpg?1650353581',
  ],
  [
    'docker',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/d9fc5a29ec8e82ee554434e4639ab3aa1a9b019e/large.jpg?1650353616',
  ],
  [
    'terraform',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/c75c6b18276bfb5dd987f24645fe741014465927/large.jpg?1406598371',
  ],
  [
    'nuxtjs',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/5fbd843371a03d506a8279353789222506bc66b0/large.jpg?1579430246',
  ],
  [
    'game',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/2cbf206b44a1a662ee73add4e1e89b2142413c38/large.jpg?1501234301',
  ],
  [
    'まとめ',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/2d06ea04c8bfd921c1ddcb9c855979a19286f2ec/large.jpg?1501238332',
  ],
  [
    'vue',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/43dc28f0ea824bbc32c526662b7e8bf96f0dbab0/large.jpg?1581479301',
  ],
  [
    'netlify',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/c342a6357b72b265c70a3ae3b11a5f2e9e52b617/large.jpg?1471538243',
  ],
  [
    'gatsby',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e2165a17e73e3f24d2a0d0bddc55da1e5e50a807/large.jpg?1616314355',
  ],
  [
    'graphql',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/b266392468537149a5f5383dee58491c12198117/large.jpg?1513498344',
  ],
  [
    'php',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/d7c485e062c15df16af1c458e729706f67395835/large.jpg?1650353379',
  ],
  [
    'flutter',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/31ffe4878d6f21d6008e36f1a844719ce8ad47b4/large.jpg?1612845431',
  ],
  [
    'heroku',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/295409f6a0af9eecb4533e3333ccf2f3ed3f703b/large.jpg?1514358546',
  ],
  [
    'nestjs',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/adad49047c1c0ebeba84f53bcb2a35c56c515971/large.jpg?1543917341',
  ],
  [
    'python',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/d0fd97ecd217dd395e891fafc1ec096519a256ed/large.jpg?1660803670',
  ],
  [
    'スタートアップ',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/6ff11fb58e111f6a67a0d8a53d3692560dc066e1/large.jpg?1567939977',
  ],
  [
    'ruby',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/20800f2e037da0cf7060d5765b057e4f712e52f2/large.jpg?1650353332',
  ],
  [
    'bot',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/167ba02ec0a465bc35f3c00c65c5491d684b4503/large.jpg?1501234073',
  ],
  [
    'googlemapsapi',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e4ebd3d9f7094ecb8f0edac6e6c7788111c19a9c/large.jpg?1368689023',
  ],
  [
    'gas',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/35eb4c462c7bbe988a226e877d8ff920f1731563/large.jpg?1514888064',
  ],
  [
    'ポエム',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/5223cb005c13b0fd9210bf5fdd7b22646a7fd833/large.jpg?1638077183',
  ],
  [
    'nextjs',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/fb5295aa4d3ece5bb713637cc51bcbed3ed04dd2/large.jpg?1481533840',
  ],
  [
    'vercel',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/96fb5fd39a15308207a512f6fa7f7f2bfbb5cfd3/large.jpg?1597331907',
  ],
  [
    'chrome',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/dfdadb503359d4a4ce5fa2778d4b1715f0149e25/large.jpg?1637591957',
  ],
  [
    'svg',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e7632ee4018e1136bc62d6880e633dc84fc6c8b1/large.jpg?1364838756',
  ],
  [
    'typescript',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e55506b8e6e806f97cb9dddf0f18a8c491d9b27a/large.jpg?1513494620',
  ],
  [
    'django',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/c3fb7f15df40ec4a0ca44b9ccfff3ebe93a3e52e/large.jpg?1364838101',
  ],
  [
    'gcp',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/23c501f9f33dcf41c460377915b090ae50133ea4/large.jpg?1514355675',
  ],
  [
    'laravel',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/09570f67dad547280bec35d0b5a8fd3f56a28fe9/large.jpg?1650353474',
  ],
  [
    '機械学習',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/9dc6c90637804ed09e6bc89c8f2d3746e56b2e8c/large.jpg?1394635775',
  ],
  [
    'firebase',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/d4754862c039952b040df6357525cff3f9513c4d/large.jpg?1478669535',
  ],
  [
    'nodejs',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/998987f6adeae72e10fcf9b4f441012892c666a8/large.jpg?1482848645',
  ],
  [
    '英語',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/102b936a63b3c043db1d85b7b3adf51c85a08a32/large.jpg?1483263518',
  ],
  [
    '失敗談',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/334826179f312eaeb98522e7e7e9e0d1bceff512/large.jpg?1577963584',
  ],
  [
    'swift',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/526b47387cd4024c3786496873c612d3c583d2f5/large.jpg?1401738498',
  ],
  [
    'アイデア',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/099cabd7fe8d4d1be0e8278380c2aca347a1af69/large.jpg?1514550981',
  ],
  [
    'csharp',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/92bfe56118936da685f3fc263c23857cb2b84615/large.jpg?1650353300',
  ],
  [
    'azure',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/6907e70f3d7e996601216ce028f5c17cc730a161/large.jpg?1622455169',
  ],
  [
    'jquery',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/cb765ad6ca378ae4510fe5f197fd55e1ab6a4522/large.jpg?1514026738',
  ],
  [
    'unity',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/3b3ef6e6103376aadfd37be3599b0ad97b057c12/large.jpg?1633667877',
  ],
  [
    'marketing',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/2ac5dbb845ea3d2800a34ac58544a17559fe28bb/large.jpg?1587858194',
  ],
  [
    'pwa',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/9570a8a10bf829273e81071750df6768f8467557/large.jpg?1543389633',
  ],
  [
    'circleci',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/48bbd3fc21d45a5ae74952b6a410d414adef6993/large.jpg?1512824596',
  ],
  [
    'twitter',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/c8874a72428231af8d0ffa1ad943cc295ef8788c/large.jpg?1387915412',
  ],
  [
    'css',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/fdded71bf515ddc0e03b1ab1336be572d2012ebc/large.jpg?1419699326',
  ],
  [
    'amplify',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/8d80b7b7b59fac851438a9f7410fc7522f28c880/large.jpg?1562655953',
  ],
  [
    'fargate',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/1ecaf2284a6c33f5fa0a24cb720b9344959e3433/large.jpg?1512032166',
  ],
  [
    'ecs',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/ea60c17d9b240d48ee7362eb5dc982cd5f72913a/large.jpg?1512303743',
  ],
  [
    'nocode',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/5f62a30aee5ff21a4c60ce2dbca9e0c9493aae22/large.jpg?1553870429',
  ],
  [
    'android',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/6d4976f84d1db5b62cfe2e5309135af299d8f92b/large.jpg?1662620512',
  ],
  [
    'springboot',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/bb6821a8ca1577eb3e095cbb3ac2868a1c56a2cc/large.jpg?1497794914',
  ],
  [
    'mysql',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/cd29cc1dbd42bdf848d017a8da64c4f1201a23b2/large.jpg?1479283105',
  ],
  [
    'ios',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/77faf372e30fcb39428ee5c0fa77946771149f20/large.jpg?1650353992',
  ],
  [
    'firestore',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/2e35f10c52864e438184d59ac4a52866a613e6b3/large.jpg?1558813301',
  ],
  [
    'go',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e97b07d7fe8974a3b66391379ac56af49b78d50e/large.jpg?1584432037',
  ],
  [
    'threejs',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/c81fc4d911ce0aa109390036e64abdf4536a7e8a/large.jpg?1562913826',
  ],
  [
    'stripe',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/7ea1e58a40ac13208ade8e84c54752ac0fbea5fd/large.jpg?1513499483',
  ],
  ['others', 'https://youliangdao.s3.ap-northeast-1.amazonaws.com/sharp-1.jpg'],
  [
    'line',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/8d6e312d72619f02de729b192b3a7f8bd0860f3d/large.jpg?1512576673',
  ],
  [
    'supabase',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/35b53670e1ec4f2cafda921befcb1154569dfead/large.jpg?1629183669',
  ],
  [
    'cloudflare',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/d8843ad74163e126da38918ca212c7bd0a868a76/large.jpg?1477637312',
  ],
  [
    'rust',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/4d6e609b82b6d094a88dc4183810f8c4e8e7cd05/large.jpg?1514023966',
  ],
  [
    'wasm',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/39b7cd092ca79a7ff89bd11c5d51179e0fb0889a/large.jpg?1506516600',
  ],
  [
    'auth0',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/75504067c78c3d19ac3ac40e7dac26efd7c0d8d5/large.jpg?1489412578',
  ],
  [
    'prisma',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/b49008d69872bc9ee5422ed1661b1a37d9d7dce3/large.jpg?1529334693',
  ],
  [
    'svelte',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/5e55c7647d6e03bada17540307e1d07e22e1eb90/large.jpg?1558405328',
  ],
  [
    'html',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/f3a4df3542fcd0d1a603e6a800780ece3b28f062/large.jpg?1490806921',
  ],
  [
    'slack',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/448422f3f4825f9062d02f10fa7e542d37a0c658/large.jpg?1547787899',
  ],
  [
    'api',
    'https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/02e5c1fe90a8b1af5ed707dd17025cf1506e99bf/large.jpg?1409140301',
  ],
]);

export const languageCategories = [
  'javascript',
  'php',
  'ruby',
  'typescript',
  'python',
  'nodejs',
  'csharp',
  'unity',
  'go',
  'rust',
  'wasm',
];

export const frameworkCategories = [
  'react',
  'rails',
  'nuxtjs',
  'vue',
  'gatsby',
  'flutter',
  'nextjs',
  'nestjs',
  'django',
  'laravel',
  'swift',
  'jquery',
  'springboot',
  'threejs',
  'svelte',
];

export const databaseCategories = ['mysql', 'firestore', 'prisma'];

export const infraCategories = [
  'aws',
  'terraform',
  'netlify',
  'heroku',
  'vercel',
  'gcp',
  'azure',
  'amplify',
  'fargate',
  'ecs',
];

export const platformCategories = [
  'firebase',
  'supabase',
  'cloudflare',
  'ios',
  'android',
];

export const toolsCategories = [
  'github',
  'docker',
  'bot',
  'api',
  'googlemapsapi',
  'gas',
  'pwa',
  'chrome',
  'circleci',
  'twitter',
  'nocode',
  'stripe',
  'line',
  'auth0',
  'slack',
  '機械学習',
];

export const otherCategories = [
  'others',
  'ポエム',
  'まとめ',
  'design',
  'ui',
  'html',
  'css',
  'game',
  'graphql',
  'アイデア',
  'marketing',
  '英語',
  '失敗談',
  'svg',
  'スタートアップ',
];
