import re


def count_words(input_str):
    input_str = re.sub(r'[^\w\s]', '', input_str)
    words = input_str.split();
    word_frequency = {}
    for i in words:
        if i in word_frequency:
            word_frequency[i] += 1
        else:
            word_frequency[i] = 1
    return word_frequency


text = "Gfg, is best : for ! Geeks for Geeks ;"
print(count_words(text))
