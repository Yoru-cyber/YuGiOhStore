import { Test, TestingModule } from '@nestjs/testing';
import { YuGiOhCardController } from './yu-gi-oh-card.controller';
import { YuGiOhCardService } from './yu-gi-oh-card.service';

describe('YuGiOhCardController', () => {
  let controller: YuGiOhCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YuGiOhCardController],
      providers: [YuGiOhCardService],
    }).compile();

    controller = module.get<YuGiOhCardController>(YuGiOhCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
