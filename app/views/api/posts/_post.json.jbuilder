json.extract! post,:id, :body, :user_id 
json.image url_for(post.image) if post.image.attached?