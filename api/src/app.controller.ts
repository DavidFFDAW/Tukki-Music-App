import { Controller, Post, UseInterceptors, UploadedFile, Get, Body, Param, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './utils/file-upload.utils';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }

  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
}