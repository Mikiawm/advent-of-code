#lang racket
(define p1 (build-path (current-directory) "input.txt"))

(define counter 0)
(define value 0)

(define inputList (string->list (read-line (open-input-file p1) 'return-linefeed) ))


(for ([c inputList]
      #:break (= value -1)
      )
  (set! counter (add1 counter))
  (if (string=? (string c) "(") (set! value (+ value 1)) (set! value (- value 1)))
  )

(display value)
(newline)
(display counter)

