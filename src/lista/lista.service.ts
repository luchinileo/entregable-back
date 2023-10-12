import { Injectable } from '@nestjs/common';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lista } from './entities/lista.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListaService {
  constructor(
    @InjectRepository(Lista)
    private readonly listaRepository: Repository<Lista>,
  ) {}

  async findAll(): Promise<Lista[]> {
    return await this.listaRepository.find();
  }

  async create(createListaDto: CreateListaDto) {
    console.log(createListaDto)
    const newUser = this.listaRepository.create(createListaDto);  
    return await this.listaRepository.save(newUser);
  }

  findOne(id: number) {
    return `This action returns a #${id} lista`;
  }

  update(id: number, updateListaDto: UpdateListaDto) {
    return `This action updates a #${id} lista`;
  }
  remove(id: number) {
    return `This action removes a #${id} lista`;
  }
}
