json.extract! user, :id, :email, :first_name, :last_name, :location_country, :location_city, :headline, :pronouns, :image
json.image url_for(user.image) if user.image.attached? 