import { Hashtag } from './entities/hashtag.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';
import { JwtPayloadUserDto } from './core/auth/dtos/jwt-payload-user.dto';

@Injectable()
export class TwitterService {
  constructor(
    @Inject('TWEETS_REPOSITORY') private tweetsRepository: Repository<Tweet>,
    @Inject('USERS_REPOSITORY') private usersRepository: Repository<User>,
    @Inject('HASHTAGS_REPOSITORY')
    private hashtagsRepository: Repository<Hashtag>,
  ) {}

  createTweet(
    createTweetDto: CreateTweetDto,
    jwtPayloadUser: JwtPayloadUserDto,
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = this.usersRepository.create(jwtPayloadUser);

        const tweetInstance = this.tweetsRepository.create();

        tweetInstance.text = createTweetDto.text;
        tweetInstance.user = user;

        resolve(await this.tweetsRepository.save(tweetInstance));
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  createUser(createUserDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const newUser = this.usersRepository.create(createUserDto);
        await this.usersRepository.save(newUser);
        resolve(newUser);
      } catch (error) {
        reject({ detail: error.detail, code: error.code });
      }
    });
  }

  getHashtags(tweet: string) {
    const hashtags = tweet
      .split(' ')
      .filter((word) => word.startsWith('#') && word.length > 1)
      .map((hashtag) => this.hashtagsRepository.create({ hashtag }));

    return hashtags;
  }
}
