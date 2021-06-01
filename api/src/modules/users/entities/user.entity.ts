import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  uid: string;

  @Column({ nullable: true })
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ nullable: false, default: 'normal' })
  type: string;
}