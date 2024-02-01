// ESM
import { faker } from "@faker-js/faker";

const AppData = {
  logo: faker.image.avatar(),
  followerCount: faker.number.int(10000),
  followingCount: faker.number.int(100),
  postCount: faker.number.int(20),
};

export default AppData;
