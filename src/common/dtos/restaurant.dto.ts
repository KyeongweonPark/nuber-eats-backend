import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { CoreOutput } from './output.dto';

@InputType()
export class RestaurantInput {
  @Field((type) => Int)
  restaurantId: number;
}

@ObjectType()
export class RestaurantOutput extends CoreOutput {
  @Field((type) => Restaurant, { nullable: true })
  restaurant?: Restaurant;
}
