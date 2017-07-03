class FileuploadController < ApplicationController
    def list
        @all_post = Post.all
    end
    
    def index
        
    end

    def read
        @one_post = Post.new
        @one_post.title = params[:title]
        @one_post.writer = params[:writer]
        @one_post.content = params[:content]
        @one_post.hit = 0
        @one_post.save
        
        redirect_to "/fileupload/list"
    end
    
    def detail
        @one_post = Post.find(params[:id])
        @one_post.hit +=1
        @one_post.save
    end

end
