@connects.each do |connect| 
    json.set! connect.id do 
        json.partial! '/api/connects/connect', connect: connect 
    end
end