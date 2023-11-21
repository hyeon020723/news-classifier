import pandas as pd

def read_text(text_file_path):
    with open(text_file_path, 'r') as f:
        return f.read()
    
def save_txt_file(save_text_path, text_file):
    with open(save_text_path,'w') as f:
        f.write(text_file)

def remove_comma(text_file):
    return text_file.replace(',', '')

def save_csv(dataframe, save_csv_path):
    dataframe.to_csv(save_csv_path)


if __name__ == "__main__":
    # it = 0
    # 산업 = 1
    # 조선 = 2
    # 건설 = 3
    idx = 1
    topic = 'industry'
    
    text_file_path = f'./{topic}.txt'
    save_text_path = f'./{topic}_without_commas.txt'
    save_csv_path = f'./{topic}.csv'

    titles = read_text(text_file_path)
    titles_without_commas = remove_comma(titles)
    save_txt_file(save_text_path, titles_without_commas)
    df = pd.read_csv(f'{topic}_without_commas.txt')
    df['topic_idx'] = idx
    save_csv(df, save_csv_path)