#lang racket
(require file/md5)
(define key "ckczppom")
(define first-part "00000")
(define second-part "000000")


(for ([i (range 0 10000000)])
  (let ([md5-hash (md5 (string-append key (number->string i) ))])
    (if (string-prefix? (bytes->string/utf-8 md5-hash) first-part)
        (error i)
        (display ""))
    ))
