import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';
import { Request } from 'express';
import { version } from 'prettier';

@Controller('cats')
export class CatsController {

    // //1. post
    // @Post()
    // create(): string{
    //     return 'This action adds a new cat';
    // }

    // //2. get
    // @Get()
    // findAll(): string {
    //     return 'This action returns all cats';
    // }

    // //3. get * 식별자를 활용해 ab와 cd 사이의 경로는 모드 해당 라우터로 들어오도록 처리
    // @Get('ab*cd')
    // findAll_t(){
    //     return 'This route uses a wildcard';
    // }

    //4. 상태 코드 변경
    //@HttpCode(204)를 통해 코드값을 임의로 변경
    // @Post()
    // @HttpCode(204)
    // create_code_state(){
    //     return 'This action adds a new cat HttpCode 204'
    // }
 
    //5.헤더 추가
    // @Post()
    // @Header('Cache-Control', 'check')
    // create(){
    //     return 'This action use Header';
    // }

    //6.리디렉션
    // @Get()
    // @Redirect('https://docs.nestjs.com', 302)
    // getDocs(@Query('version') version){
    //     if(version && version === '5'){
    //         return {url: 'https://docs.nestjs.com/v5/'};
    //     }
    // }

    //7.경로 매개변수
    // @Get(':id')
    // findOne(@Param() params):string {
    //     console.log(params.id);
    //     return `This action returns a #${params.id} cat`;
    // }
    // @Get(':id')
    // findOne(@Param('id') id:string):string {
    //     console.log(id);
    //     return `This action returns a getParams #${id} cat`;
    // }

    


    

}


