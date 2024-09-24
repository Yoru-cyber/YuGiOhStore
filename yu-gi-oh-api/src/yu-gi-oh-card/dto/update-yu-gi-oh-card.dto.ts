import { PartialType } from '@nestjs/mapped-types';
import { CreateYuGiOhCardDto } from './create-yu-gi-oh-card.dto';

export class UpdateYuGiOhCardDto extends PartialType(CreateYuGiOhCardDto) {}
