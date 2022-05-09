require 'net/http'
require 'json'

api_key = ENV['YOUTUBE_API_KEY'] # APIのキーを環境変数から読み込み
play_list_id = '' # 取得したい再生リストのIDを設定
file_name = '' # 動画IDの出力ファイル名

params = {
  part: 'snippet,contentDetails',
  key: api_key,
  playlistId: play_list_id,
  pageToken: nil,
}

uri = URI('https://www.googleapis.com/youtube/v3/playlistItems')
uri.query = URI.encode_www_form(params)

video_list = []
while true
  data = JSON.parse(Net::HTTP.get(uri))
  params[:pageToken] = data['nextPageToken']
  uri.query = URI.encode_www_form(params)

  items = data['items']
  items.each do |item|
    video_data = {
      snippet: item['snippet'],
      contentDetails: item['contentDetails'],
    }
    File.open("./data/log/#{file_name}_log.txt", "a") { |f| f.print video_data.to_json + "\n" }
    video_list << video_data
  end

  break if params[:pageToken].nil?
end

File.open("./data/json/#{file_name}.json", "w") { |f| f.print video_list.to_json }
