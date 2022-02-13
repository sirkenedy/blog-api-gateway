import { IsNotEmpty  } from 'class-validator';

export class CreatePostDto {
    @IsNotEmpty({"message" : "Enter Post Title"})
    title: string;

    @IsNotEmpty({"message" : "Enter post content or description"})
    description: string;

    @IsNotEmpty({"message" : "upload an image"})
    image: string;
}
