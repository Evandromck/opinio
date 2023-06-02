import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class PersonModel {
  @PrimaryGeneratedColumn()//ira acrescentar id 
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column('int')
  age: number;

  @Column({ length: 255 })
  email: string;
}

