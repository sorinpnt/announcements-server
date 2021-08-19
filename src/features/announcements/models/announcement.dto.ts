export class AnnouncementDto {
  constructor(
    public id: number,
    public publisher: {
      firstName: string;
      lastName: string;
    },
    public read: boolean,
    public important: boolean,
    public title: string,
    public text: string,
  ) {}
}
