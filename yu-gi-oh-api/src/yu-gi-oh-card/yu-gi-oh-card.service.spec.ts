import { Test, TestingModule } from '@nestjs/testing';
import { YuGiOhCardService } from './yu-gi-oh-card.service';

describe('YuGiOhCardService', () => {
  let service: YuGiOhCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YuGiOhCardService],
    }).compile();

    service = module.get<YuGiOhCardService>(YuGiOhCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
