import { Route, Tags, Controller, Post, SuccessResponse, Request } from 'tsoa';
import { ImageResponse } from '../models/Image';
import { AppRequest } from '../models/Request';

@Route('images')
@Tags('Images')
export class ImagesController extends Controller {
  @Post('/')
  @SuccessResponse('201', 'Created')
  public async addPicturesRoute(@Request() request: AppRequest): Promise<ImageResponse> {
    console.log('Entering addPicturesRoute function.');

    const file = request.app.locals.upload.single('file');
    console.log('==> TOTO : ', file);
    console.log('Defined file middleware:', !!file);

    return new Promise<ImageResponse>((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file(request as any, null as any, (err) => {
        if (err) {
          console.log('Error while processing the file with multer:', err);
          return reject(err);
        }

        console.log('File processed by multer.');

        console.log('==> FILE : ', request.file);

        const savedFile = request.file;

        if (!savedFile) {
          console.log('Failed to save file.');
          return reject(new Error('Failed to save file'));
        }

        console.log('File saved successfully:', savedFile.path);

        const response: ImageResponse = { filePath: savedFile.path };
        resolve(response);
      });
    });
  }
}
