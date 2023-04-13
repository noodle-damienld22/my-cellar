import { Route, Tags, Controller, Post, SuccessResponse, Request } from 'tsoa';
import { ImageResponse } from '../models/Image';
import { AppRequest } from '../models/Request';

@Route('images')
@Tags('Images')
export class ImagesController extends Controller {
  /**
   * Create a new drink.
   * Size limit to 2Mb
   */
  @Post('/')
  @SuccessResponse('201', 'Created')
  public async addPicturesRoute(@Request() request: AppRequest) {
    const file = request.app.locals.upload.single('file');

    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file(request as any, null as any, (err) => {
        if (err) {
          reject(err);
        }

        const savedFile = request.file;

        if (!savedFile) {
          reject('Failed to save file');
        }

        const response: ImageResponse = { filePath: savedFile?.path || '' };
        resolve(response);
      });
    });
  }
}
