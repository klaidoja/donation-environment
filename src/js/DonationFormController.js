var successFunction = function (data) {
    var donationInformation = JSON.parse(data.responseText);
    console.log(donationInformation);
    var $donationFormMainContent = $('#jumbo div');
    $donationFormMainContent.empty();
    $donationFormMainContent.append('<div>').text('Aitäh! \n').attr('id', 'paymentInfo');


    $('#paymentInfo').after('<div>').attr('id', 'pdfDownloadDiv');
    $('#pdfDownloadDiv').attr('class', 'keskele');

    $('<button>').text('Download PDF').attr('id', 'pdfDownloadButton').appendTo('#pdfDownloadDiv');
    $('#pdfDownloadButton').attr('class', 'btn btn-primary btn-lg sharp');
    $('#pdfDownloadButton').data(donationInformation.object);


    $('#pdfDownloadButton').on('click', function (e) {
        e.preventDefault();
        var imgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAAA4CAYAAAD6icQQAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAXQEAAF0BAEqUcL5AAAAB3RJTUUH3QQFCwMTA+wOXwAAIABJREFUeNrtnXe4JFWd9z/feydVkaMgYiAtrkgQUEEBeVnEqjUhoqgYkMVFpRpFV0BhEdSV1VeQKkUFjC+CEkRWrQZRARGXnBGQNDBkkGw1MMx83z/qdN+6PX3TBGD3ub/n6WfudFWfqvM755fDgWUAcZo3/i5m9/5OCqZhGqZhyUFLc7AoLeiUWZdg1wU+CWyOOQ1xQlVmRElOp92axvw0TMMLhXABoiQfAnKhvYDYGEkLDH+T+VTVzk6upW9ONU3A0zANzz3hNqVnlOavxNoD+d9VD3uX7RI4W2JfwzZCywO3AIcZzumU2YPTSzAN0/AcEW6fSrwx8GVgB8zqFg8LDgPOrMps3shv8tcI7QPsa4zQLdinWHypU7aeipMC42k1ehqmYRIwNBViHQErTot1oiQ/HbgBeBcwC/nATpmtVpXZt4C747TYO06Lc+O02FToqqrMPm57FaEzMOsifV7Wo3FaHICYIWmM503D8wFx3xpEST7hPdPwApG4cZpji047C4tX7CjxYcyHLYN1Ffgk4NuddquK0+Llht0FGbBuY6jfGY4X/KIqs2ejtNhU8HHg3TarSzwI5MCpVZnd1C/Zp+F5It6kWBWxvuHqTpk9E4j15cDKVZldNY2hFyDhxmlOVba63HZ7ia+BNsVEiFsxn7S4sFNmT8ZpMQv4FvAOmzUlY2RhoBaltudLugf4clVmJ4RNsIbhY8CXw8s8BJxl84lOO3tieomeV4m7tqEUXh/0PeBAYBNM23IkdHBVZt+bxtQLhHDjtKAqM+I0j43+UXCM8bbAAqE7gS9WZfaTcO86wL8Ch9pdEh0MBmvkmXcaPgX8rlNmT8RpPttwtNC7sddAAvsopGMw86p25ulQ0nMubXdAnI2ZjfgLsDnwQeD79Xr6FFkfqNrZs9PYeoFI3Dgttjb+KtZOgRjb4BNsftFpt4jSYgvhTxq9U2a1MJKZnMOrd5/hesFJxsd2ytajUVq8RPZ7kD4JrAc8bjgDs1+nnT05vWTPqcRdBTgD2MFwBOZwYH3EOYI1gb2rsg7vTcMLxDlle0uhnSSutL0p8LaqbP0CsU6U5L8BLgXtjb3aVGzm/vtkXoX5kswdcVoc1imzu6p26yhgI9sfCjd/UGLNZemAeS6dLHHDyROl+Qt2c1Rl9gj2zjaR4PBOO1sIvhmzEbCK7Z/9D2RGS3R9EAxy2j1/EjfJdzIMddqtc+IkF9KWwCcNH9GI1JwKsU56vxgfCvplp8xuC8g8ADilKrO7xkVgWoBZTWJr4Kkp4OCerkMsTgosbyG0cs2/jNDFVTvrjLPQ6wLrD2B+kvQ08JDxXztliyjN6ZQt4rRYGdjGpqPJYXDI9t+QVgIPCRFMk79UZfbAorjIwbweKeq+CPi6qmw9OM6mXRXY0ni+EIansC/vtFvzB4y/HLB1iNkLeNbmok47mx+lxTqCVwLPhtBfBVxRlYuq1DW+2Uj2OiAjhoG7qzK7MVwfRmwFxGADMw2Xd8rWw433fimwXtDjZPh7p8wuaT6javfCl+sBr7J5g/ArLM0QPA5cb/ti4NpOu/XoZBhAVWZEaS7QP8p+NWIboxcHc/Bh4ErblwpdV7Wzp8byIwCvAj8bDMkOcPkgXDVhxlgEUJXZ78PA7wU+C2zVo9J6x2jZ8BLHmG8IDo/T/Bxbn6/K7KiupBov26pTZsRp8U7sE5CwHV5zDA0+fG38ZuAmgKqdEaf5DsDR0JvmB4ETx5BKxGkxFEyJOc3nNFB0v9Bf4qTIqjK7Pnz3JsMZ41oX3UsGYxD7YW8g6VOBodxve8PBuGgRJcXm4O/UNOtbDP80gf3yNPbRkl4VOM93gEsG36whiYOBN4cvjhVcFPZIBZwCrKIawf+BxhinntyGSKfbnh0Ywaub7A+zO9JnAp6uE35jH4ecjXRuF43Cbxvgr5kF+h7mzZZfDAJplIUXMvxuiNM8r8rW8WNFNaKkO2bxUuDb2NsirRqePdqTI3Uw10RJcUinnf2u+z6N2VeCk0Grh998zfYli6Uqa2TSaxnudR3a2ab3kbYZ9f+l+tE2krZB7Iz1deTVuuqLJ0f570R6AHy6pJPBPzXc1rh+OvAz4OeG611v8nP6MLAGTa3CvCdK8hlxmo/Fee8Argk/WBgY3TuBtwOnGa9p2BFxTpzmLw0/3RbzBFLb5mTgZ4bLbcAsAP6A+BlwMuLPoMdAl0o6pscUxK867dYTg94rSgokfiP0VNhA13TarTvGQ1ynzP4O/LQ7dUlndNqthQPvrT3+Z4c1WYj1K6P5PRUbTm1sqJ9XY4T1qnYLSRcYHpKEzWU213fXvGq3FiKVwNPhWadXZeux0TyE1RuEsH9Vtn4dp0WDaIsNbT0CfATxIqGLgN2AFwMrgF4H/KB2vrKJ0XFxWhwzkmSU98+dOC12wb7D5q1IywO/AP4JazXEKuDE5izwLMPrBOfEabFPPx46ZfZY2I9d+Hmn3Zpwq88YR4qsBqyhOjzzvEDNuASwaZTkN3barWcm8bMfVmX2tj617jjj9Wr10nt02q1nG4S3e1OditJ8GPMRxL3AtcCbEdtjrWW4axCuwo65l5rRPluV2Tcat/wqTooMkWOvjfgMsD/wm047+1wfE/gXxPG2n5H1+aqdXdxQ915j+3akpsp1b/0OrUGERZwWC4AOMAeYlGNP0oNB/uBa3RsPnlTNqJ4xrpoef+OHNaJJPDLBOE+HcZB4xLh/To/ZNRO1+FufmTIT+I/w1DOEvt2tQqtV2eKVwAXCMeh2YN+qzH7b9/xLgEvitDgK+IngNUArTovlgH/prnGUFF28vh04s5bS/m/Qx6oyu65vzLOAs6K02EXwQ8TawHFxWqxQldlRTclr+/4R6T85epsxjtr0TuAoTSG7alkZ4DYLJG0B3D6Rk6Aqs18MGGemR9SX5YDHurZmVWan1vHqHgG+xWIN2X9A2h/7RqSVBLtVZXbMOEzGGkPlrdpZEaXFvwutDrwP2L8qs/MHqP+zg9om46jpzKra2RVh80S1KTixpeIwlmocaqp4n4SSY0bEc/+VoZEFHP/ZhmcVdOIxzIaF/XMOa02cFv8GvAl4wLBnp8wW9DmZTgFWs/SszK5VO7u6J837pF9VZtdHab6DrMsNG0neC/TnII27RBvb/EQCxF223t5pZw+NNWanzM6Ok2I7zNXGy0k6PEqLC2rnbo9bPqtR4moJCFdwo/GPeskTjfhNY0FG/x02S7Cpxgjq9tkAE8WM6mEWUDsQxoWxYrweEKnqNDh6VbaI0oLApN4GzEQ6piqzm+K0uM6wicQXgGOm6uXrclbBPMTqeDQjXNRm725PjXvPVD2PU/VIeBKRvYYJPkhyN7bihPS/sN6xCs8dPJvmluq0W8Rp8Q7gK8ERuXmnbFVhHbtEvZ9hkzDAkV2ircbJxuuUrSfjtPiE4CzQDCCLkvwkiaeCFvBdiZXC7Z/oEu1YY0ZJAfKtWF8SOhJYXnj/qmzt2dgbk46jju+cqrnZhcCFLyRXfldKLkPpPht4L3BfVWbtcOkzMmcj1ojTYteqzM5oeiknEVLpOq82DA86aTJEo6XirNcS/FKT9SmMSbz9rGgph3VeZ3yS0LPAB6syu3dRAvIhI8/2FwdJxEGM1vaFwF8lvRLYXNI/VGV2dZzkqwZHJbbnddqtX000ZmfEm30KcLDNSpI+EKf53lWZPb248x8aS3LFabFmnBYPREn+bJwW7+/jIp+L02JBnBadvklvESX5o3GaPx0nxRv6rp0QJcWCKC3+0ufBTuI0fyJKikfjtHh133POjpJ8YZTkv+qXklPfvpqQwIDdDStjjmhc+r3xXbYBDu16ngdLKI/yzPecaubrxssB9wHfmISeMabkkZomhCccySPmxuSlrZecsDylQTShZi7X2rhrwTID+DkmtvluVWan9RNQlOSbg1ap38N/6pStBZOJt1ZlRqfdegr4Y63wmeDIwpB0sSpxWi8EOTkGfjtwZ0N/3Xk0o56893VMwg0wx3YMGgaivs2zXIgrzhlg18wBzTKe1TfebIkhwYr99icokoj630diFdUwe4k20SR90oavgJ+0/MMGwhdI+mHg3OvHabH52FJllHW4OrBVnBY/FRwA3GL8/uCBnlA+jSWl7EYAfQL9Vw3jciqqck0gniJ+x1GVJ20qaxxHZWC/Zr6k84GXSXqs086yMSb/CuOh+j10y3im1BhOuotCyK0XnqolsILarpu7IchJaAfdP//cmOemi2g3WgqE2/UsBi43Y5CKvchmELMVuJSEmlkohrj5b5NBNMZc5DmBcy+/rNXwOMl3xn4J1qPA0VFSFHFaFHGaF8CWiIXgFYFkPC5re2GcFi+WuIxa5drD+GBg+07ZOncymTlTIZplqSovracsNVXZrp0e8FRgxitFSXHEGM+cGaIIi8vs/9bz1cCs8PxoZLjJj9vzHuN5uKeNzFgSVAyNsxgRqj1c6pOstpdzYBFBbenCcENmzOnT/YcmWGQNWKhZgXPPWNaEi7S/JCTWAe0rsR+wH2g/7LR+vzoZQ/aMcTj1UFVm92B+hTQrzHsVzH2TJcqlZxN6CWhk8m5oP0eMyHUyx0wgFdznWrAcEKfFdn2SDfCjDRftRoten5AZxVB7w+yQByDd37PnpY0nqyr3nls3muhqI3OXCeH2rUefCjumkjaj8aOZizCCGlbqnxfuKQrDfVQwJ7zF7GVFr3FSEKf5y6ljd/OBI1Q7MkY+0qHUiRuAXwlsPYmVPwz4a732+pzQbktIS4NgeNnxMeEJxtdSn87k9PiqzJ427ANeQB3eOy5Oi+WCI7B747UNG2HbOC2GqynUdhu2HGFd7joqL+3ao8K7TVZV7j5X0lYNuvndsiLcOfTcAYr7JW5QWVDjms0sdRVoe2afljOzyRBGOJV7MUD3xbCMh8DYjpZcYRwzxorNtrbXtv2Hqsy+WJWtw6sya36+TB1/rW3MkL0UL+LscHOxHjZOu3hCnBglxWYT21ldN5cnQzBrTiihpu5wUteOFl55cdXkpooqL7nslkeHijtl9mvMd4LquTHwmyaRVGV2r11nswX4Qr3vJnZQRUk+A3ungLeHJV0YxjxXvQQYrRMl+S7h/smYYi+izt/G5oqqzO7p/m5pO6eGGguufnXQDtunqdeN+ltz+hjlKPVyhFMp6o4vNFqym+Xq1dISJYGMZfh3ESdpv1pN1pfHksoh6fvEOsPFW8dpsfF48dUQuroV9P7wDrMlTojSYvnx1bbxnVOdUOwQrr5hsGqWd51TM7uORU2edh4acWppiwmcLavYY6TNThDHHaxiju+cajKfuK7NzixfFp61Q5wWBzffT+LjjT3w+Sgt1u2EmP1485J4U52vbZB/jHm8QWSfbszxm1GSzw5RGMZbC0t7YlYNXx/ddJZN5Jxqjt3NChuPIGb0FkDM6cd7L5m6qcbac+yejOkfezlPzDyGRnMvdUtPVlxCBasalAMQEL4BsA1mXlVmfxq0AI3wz9GNcfYb74EhyR/Dz4FThGV7K9WN9cZ1mpjB+TO9TYC7GWTrxUmxWfNazWS6DEUtT93MuKmxg/45Sovhvgb3hP7Yw8AHNDmbfWGX2Lr47dRjrBclxfqdsuXJWMtika2B4N3g+7tSNU6LLUKqI1WZXWq7CGljs4GfRkkehWcPVGnjtHgFcDwwR+gezJFVO3On3SJOClQXKpwbXnVjSd9p/HbAmC3ipNhFcFjgxudKnNrnuG3ObWHDhGu+18viNF+/uxeHxtk9M91NV1nUOTSzt8GaKrG6qnVNqIvqgMa24rRQQ6Vqho1mjFIlVXuTvYSmlKxZDczMqqVtD3Ffr6foY8dXnwqwb7V8dUDzTnFarNHlgMazalzV+OjmtXbKbCGwl9Hj4cb9ozTfq9NuDdo8vRo54UVOfugRpPlWQMlsxHFRms/pXqt6vcHy3HBAI+Y7IQ7jJAf5TotujvT2mEOrUVlmGXGSLy/pUmDTQEBD2MN9qnLzeS+u363V3YSz47T4nKQLOu3s1igpZtValcDMGLDas1Vrd70IR5dQqrJ1h+HzQTtcDnN2lDSqeqQDkS4IzrbtgFujJN9ykMkSp8XuhusML8d0gC077dYDTc2hKjMbf8hwf1j3veIkvzxK8rUH2dBxUhxiKI1XAN8C7FyV2dN9iSJx156xu7jKAtHns6I0/4zti6qydesoqToGexvSCGebuQjh9jiehhu7bvaIidsvM7ySRq4NAQu6bvsGz4kXtXiMpClL3JpbqWvzbNrgLVsCZ4W809cB7wxe//PGswUlqMrWY3FaXATeDLQx8L6qneVhHht39cs4zVevyuyhKMnrGrcyq6Ik30rifOy1sU6I0+KeqszOrjN1egLk5QGRcwwbdNrZef1ZWoFTf984lb0T0muFHo7T/Gegu4HVqbturol9HtJrwCtKWidKcwl5vEod4MkoLQ6i1hTWlDgsTosPAv8F/N2wMXVCQge4ANhOMNtira4K3CkzJG3WWNeLGxVeC0acas4Dbtfsrr1gw+7OaWRCvYwu87U36T4nlOtRla0fxGmxoeR/A9aQdWmU5jt1ytbjnTLrANvHafFjzG6S1gYui5P8MqQ/Ak8Yvxi0E7BeWMLzLX+gU7bua2Zj1VpUTqfduitOi42NT8XaEfEawT1Rmp8jdHlwcr4C81bEyoJnQGfY3rPTzhZ0cTTSikmbdTeZ8EVxkuO66KCHK4ljmzgZL447uyfBTV84iLiRltO8NlQLHSOp36G0sEE8sxrPGap97oNDUrV24aHBzqDxPHmtrkr3LmBt1+73ucAnorRYOUqKjVzXPs61PQ9ptzgthjpjpDIGDr+q8dqgucAdtrM4LfaJ0+ItYX5zgbtAX4/TfGan3eoWzdNpt24GXmf0I4khcDtOi/3rTJ0MYAPjN4Ux7hDaN0ryDfuztKoyoyqzx7B2Q2pRc/4ItBf4EPC+wL3Gu1n6QK1Way54Lcx2k0n565TZecD2wPGBk62H+RTmC6qJ9lSbNxh/C3y74U6hD0dpvnKnVlPfDPwDVhfnc4G5xncI7rKZa7gZdHKc5qLOWHvM9lxLQ0KfaEj32GZXxJ3AXEnbRUm+VcNH0t3MB4PeZvgrYiuhP0dpvl4Dbx9G3h4oDI8gbQUcgH2YYB/VbZLOtL0LOOmUrbtHFZ+MNq+oyuxRoV2AnV2X5c3H7AwcRJ1htyciAn8f2M74/Z1269koyXvaQNC63qQ6nzrgSXOR5oLvwNwFzBXcjOtyy+77jFdkMNLoos+z0Ss3kfo9wbNGqpNGhxKMVmy4K2YGjo269nOtBq0wnnUzlSNLorRAhqqd/YK6VrIfHgV2GKQSDyLesFgPA+8Y45EbDnJ+dYJ6GJjJPGCvOMn3s9hd9mZxWhxgc2xVZrcQmhUs4hgbyEz8WFW2CqAIDfv+AfQU5oq+bgubD5jHhKEL45s6ZetjwMeiJN9E0lqG+ztldm3D+XYldfXNKLx36rK59aagIB3dddg010FBWwH2GGM9Rs0l5Je3Q+psInRInBbfr8rswnD/FcAVQCtKijUlNqbOyptbldnNo8wiBpdLNnEELOy0s3OBc8M7vTzM28At3QMB4jTvORubKnqoDDuPAd1TJoLxEhtmuSuwcT9BrdhwPMSjxhvpxjp7MCMAGup1n89hqYUFF7cf83gSd+pjtRiDEP8O/GhSmsMY79PzZBqqMrsbuLtpJkxi0zGhcy2odJ126zrguskQ/9Lqg92ZoIhjrOeHd7uWupa6GRXoH/8B4IFBzKAzhQKSvv93tYveeANqi/tNk8WC8Qh3uNF/w4uE6YKI1Oi4xXC3Yq/P6YTtqJtC5tGhojkjUUctPyAe6GXVJOf5gMlWFS3OxlnEibWMmF/1Am5SP+jdqsUkxGW1PksDxvEqe7hBL/0EtYLU06DnNNzGc7qSVVJ/ttXMBqU3s/HVELxD/Za2QjwqTvPh/w2EG/V5ip/PIzxeKMeHLKvjZppe+/9tR6UMjeNVnl3HZL1oFo8ZCqGdUVJbozRe9xG7Z9INNI/KfdZsRjzQzUOwh5vF+WMF+l/o0L9hFJSXKC227GLqudxgUVIMxWmxW5wWh1B7iJ8/3CTFJnFarNYZIwa6xDiXiNNi+SjNXxU6Mi7Tw9VHJUos47a748VxR6rh3F/R4ygkWo+O45rItsaoo5vZI+6mNLaHGxQ/e9Tje6VcUp/3+n+Oalxvyo9GSa6uGhunxb/KvixK8lawIYnT4pVxWmy3rNXQujcyLzH+ErDG8yhlN0Sca/svS0utjNNiVpzmnxgJ32QAJwpdFyX5hp2y1e0rlkZJvvYyWeukWClOi7QqW88T4aK4zgIUSP3J/zPVM24btbL1D7opziv0MYLmf5r271Ajp3aoMdYKfe6rxbJ0B4WQojSfMoef6P6xTrKrjw/l3X0vfyvSXRpdIbI98I/Nd1wcFbP/uzHe+6nxWu0MkkpjSarxGsqPlcNbe1n9pOEGSZdNTZKNsw5mFdDufSbfNYZbJT0+sp30PkkrD8ZpPqG0jBtNEvolrPGmNlsua8Y3nnPKDadRf1H8rAZRDY22cUea2/YRe/M/zTjurEEJGKOa1NUVNnOYRN+pfgQHibeKzdYST9r+726KXTiobAhYviqzh0JCxlOhB/FM4KnQDaE7zizbw0hDgqdrB57XMLq/U2bz47RQKIiwpLgqs7/FabGa4LVIs+OkkGGB7YuRdpL0UMMJ91lJX43SfAZmuU6jBWmU5K+XtILtqzrt1oP9jcmipNhasAryrVWZ3VqHUuqU1N49abG9zFDVzs4Dngl9vxyl+SyhIdsrIx6symxBXDO2FcFDNhXwTNWuEwaE3mB5RVn3Gl9b399LhhjCbIc0w3Bxpxx8ZEzQOh7CvA959UAwKwjZJuq0swejulTPnTL7U5BkIZsoI06LNYBNsYeQbrW5rdPOQN6221o3ToqVwI8hfVNwpvED4fuXGe8CHBmnxSzsOUgLqCvb3Cmzx8PeWD4cUreCzUOCFS1HWH+vwryipIjCtl6lKrN7gi/nCKAdJ/lMwxyJJ6uy5edO4nbjq+4j1OAJDtqw1ajcCZVB3XKYeMCoC8P1oQaBGrTQfWnWjYL7hYEJTNnGHVG/fKVEG7hA4pEoyTcO15+xuQm4Ik6L840vAj6K9DNJj0h642hO75Uk3Qk+vy468LW2buxqEFWZWdIhkiogidPiXcZ/BVYDOsiVxM6StgVuAr8hTosN47SYK2kD4PuC+ZJOCs/cMU6KxyRdiCklPRCnxXea8cs4Ld4n8UfEr0G3xGnxh05Il6ubuxe7RUm+QHWf5nPiNH8S2L2L6U7Zegb8uKRfC0UhjRDM4ViPCG0QVPk9JC1AnCd0JvJFgm27DsY4KQ4ALUD6HeYsmUfjtPh4M721iUubtSSuAJ0R9s4rgCckHxGl+S2C8wQXxGnxaJwWW4S5DEdpcRw1EbZDv+WzQxZcATodeFWcFkY8amkW+EjgMqFZcVrsibhRsIbQddRN5nbF/hLwqJpxfbOapKeMj6k7FpIJ3Sfx0sbefQk1Y/t6nBRrxElxBXXHyf9EekbSb2HZhETGI4aLwQchDsR8u+/aIYLPGR1oqVk69VvqoxgPZHSTZzCHAgcaDsJ1UnicFCD9EnOQ0EEOgezAE54EDgljHQws1pGbcVpsCXqP66SP9UD3SDqqoQhcQH2EyI2Y1wFF6Mv8d8NHu+9ZO8g0DMyW+VD49W3I85uGgO3zG7i9NHT2w7AZ6PXAVYZLFNgeZh7w9fCbg2xebfuIuM4++gPiZGClqp3NBN5t2DdKiiLMbZi6t/K61FVAH8feMU6Lj4TrrwdOk3Sy7ZcaIlt7Aq+t37WnHl3S9WaMJGBwWjg9wbX04ijqY2BmYpYD7TDSaF4fRf4G8DHj2Yg5iM9gHwu8ZTBD9YPAbeBnw3dhH2kXobfaHrb5P9Q5A1+N02Km8daCfYD3VWU2KzDEfaKaOfwY+I3NndRZaP8keBb0h5Gl8TmGU0CP2/5n462R/oj0m7CEC7tqb9XO7qA+nXIhaNj1+c49UVbvXR5CvtlmgeFB5M+6rjM80ubVmM8Y6zlTlUOXx6uBq8eQZMf02wXh+1GdIcPkABNqWkf9JmySMnz6nCitR6lbb44KpXSmEAeN63lc3iDiTq2Oe/1RNrb9sOA/O+3WbQ0CPFDSt6Ikb1Xt7KGgbu4NXGx0wwjTHV1OLmlOffQJQ1XZmhcl+W0hAHZNQ0r2nEJVO3sqToubwzPnddqt66K0mIFdBhf0XOD9QXI9jf0Q6O1Rkv9HVWb3Qp1jHcaNQ5ekruPlSMNdMnt32q1uR8FfxmnxGvChjdK74UUVLg/38s5lhW6Kb47T4gNVmf20Zuy9nZwL3RHaHe0Tog0SesQmZ0BWGVItx/psM5nTq3Z9bhBwbpTkvwY2kTRjJDVWn4qT/OawtudFtRp9WZwWjwg/E5Lxbw04mdOl2k67dX+cFg+EkyJu6oSk/fqkgxFrruFYUuOPUbQSNIC6n4XoptdeF3B6T6e9SIP0ZU+4QTXaFzh2Ek6h91RldmpAwBGEToiG06oy654SoDgpFjaa+b0xpKEJ/BPQnuM+wSxA3qgKh4BNFixmxGm+LWYfpNdTF54vBN3ft4eeNK761OIzgS9J+iawZ3ByHYp5b6edubfRFnWfq1eMGHTAhgReOOab9jp8AXhlpHXDZvrnBmFJ0vXAo6ChqLaf32PYVfbmwAKNbhC5g+BU5L4TIHz3xLhTL621U7YejZL8cMSXgRPjtDgRKIDDwrxiYI7MXqhRi2uulhYxs8b0NKqe8NPNNrySbrf92vo6lyN+BLwLdFmcFg8AXwD/mDqxX4tm6/TOBWpYdPQ3aR/Y6HtyvY7dK0wZyV3wMk8ZmjHRK2m8Euxux/JBiBpjlerEqb47J8JQt6Zrql5gez+koxEFsBdwrc127MOAAAAG+klEQVQ3wDv0vbGbEwmS8a44LX5t/P44zT9l+LTgwUYbk7DXLGmUybGwDx29k6XGzjvWqC0gtIDaMYLt7QedJRMnORI32VoZfCDS/gGlN/TdumZVttx3gFX/Rl1ge0bfQo1qUNRpt74fJ/lvLe1g/C5QJrMpYteAwys67Swdz0k4IQzear3NVLWzZ4C94rQ4BrOD8d5Ixwu9aEQ7m7B8cVDZoJr/NhqVq7E3PdZGHWFUPXJZ5h19hiZkJ1O/2DvmZazLi6RzaGKethjN+oYtbRfU9FZVeycfkzyrzuJqvM3Ygx8NGsZ8VWhvzGFV4/wiwYP1WFq3gZNNaybQa+0zPzxoRo9ovci0F4abZwfG8QjSNaF/72eb5kgvTCRtBmyEOLHTbv2oKrMbcG+jRWFuberOEBt0gme2xwlHzdn3SnoxYmYjzLFj/xJW7da8Tpmd2Clb71Jtl29F3XHxUtXOuPW6IalR4SMP3gUecGlgy56+LixVmV1lfEyn3dpU9k2Y7bp47ObON3pP1T0fRpJ5FloMITUbBPytVjC8VpdxR0mxCkZWD1HPhMq3zRuhrshm3dF7H5CWeXPDGePKuQmbkS3ScKMXxMUeg32ODvOgib3FQsOL0fpwIfYNSERpsZ/gbOoQTwW8LE6LN1RldmEIdc2Aup3sSPgkpyqzK+Ok+D3iXzD3Vu3sB32775d1axofEafF0cFJ9LGg+g6FKd6kmisfGafFd4znNabfxf/VYZ7vidPiMuqCgQNBrwX+M07yp0DnxmnxNPaqcVpsiPmNoZLYJUry0yQ9hJlVKw7aJk6Ljaj7OW9vuC5Oi92w/1rbwcwOUiI0tNdJwLupm+OdFCXFKyV/Omh8C+MkfzXSW7B/j3gixO63MfwJeyGwF+I80F/jtPhAmI/rYyi9blWOxludfI9US7+Z/WttRlVFzUCS7flxWnzEdkfS9Yano7RYC3iJ3WuCcL3xh+Ik3xX7yjjN5wLzg34RuozqAuDTmN0Qp8dpcUdVZpfGafF3SYdGSXGn6jNqv9gn3O6RNA8ooiR/QFIH/OWAi1mBsd0Xp8V8w+5xkp8Lur9qZ/c+1xL3cdBtNOop+z9Cc0HNWN3D9TXdVR91OYrhhmvcTvfQaZng2p873sf4NuP5UwwFGfg65nuqHSTXUJdPfdf2jdinRkm+BmIlxP3AS5rqXE+/FXvY/Im6XeuowHvVbp0KfAHpHbVTzgcZfxN0vc06UVIMgW8x/logomNr08DbgW6XeFN41wew9wF2Atq2XZXZ3UGSHGZ0cDgz9RLE8didqp09gtgBeFboT7Z/inwP1hHU5+C+MRwOvYPMb4EzkW7AfotgHvg6Qs8q4zMNXxVuGS6W+JjN3hZ3IF6PdDOwC/BH6kLxXwFXIH+o02493Wm3rrfZFvt4m2ONr0L+I/ZXQO1BXmWZFwF/R3ownJqxbXAorSt7eMT545fVJ0ZqQ8yVwUt/keBiwXeAT0n6bhj6x1i/B/0C6X3BybQl9u3UZ0Jh+wzgOOArNl+ryl4J5M428yXOBv7LcALmCqEVwHPqlrveF3hS0u+M2zZnqW4wsGbDCfZ2wauQ/owW6Wi6bGFxsooG/Was78fLxJnIS7yk7zQeRBO8U5xOvUAgGiPDZtR7Dig8iKf4Lot9T7L4ObXdY1bipJhUptfSfveJ1m3QevXPN06LqfVGHveefIlpaZnCoKT4qbzg4hDV8wVLsrGnYRqWFUzZbd0t0o6TfC1LW3RGTrUjSnIhfU6wB3ivqmxdFSX5TMRpmNdKusOwT6+LQpKvh/RLwYrGP5c5FOmZF3K95zRMwwsBFiONsFWfyC3NI3jhgur7IknXC/YFWlXZuio49dYUOg74ELChmkkd0o4y/xe4S+hzFjtOE+00TMMyINw4KYaDF23G6LoBzqA+4e9YYIMozWeFxmN3uz59e43Qn7V3El6nzL5ftbOfGHcT6p+eXpJpmIalTLhRklO1swXADc3jHqMk3wjYBijrqL1/IHRw78wU2EXS4ZjVkNbss3e3UX1W6DWyroySYnpVpmEalibh9h+1MJJuotXCAcL3VWX2NdcHLr1nRL3O/l9VZhtKOgV4a5wUewR7eRj4t1BCd3jVzh7T9JpMwzRMCFPO8AhZjt3sirqyo539d0gx3C5K8xVVV2ecCRClxUuEF1JnEL28pnTfE4bb1vauwPmGK+M0f29VZj+fXpZpmIalbON2ygxUn0LnUB4WSHorpC2FHgFuFfpM+P5F1NU094Uu+HtVZeuPQVafiPS0xOsl3QbadHpJpmEalhF0+ycFG3V0XDfJV21eq78rhuOkWGXk9wWDCqybv5mGaZiGpUu0owktyYmSfJHMmSipCbqfEAd9N9740zAN07Ao/H9hERUJcQAb+gAAAABJRU5ErkJggg==';
        var doc = new jsPDF();
        doc.setFont('helvetica');
        doc.setFontSize(12);
        doc.addImage(imgData, 'PNG', 15, 10, 60, 15);
        doc.setFontType('bold');
        doc.text(15, 40, 'Makse saaja: ');
        doc.setFontType('normal');
        doc.text(40, 40, $('#pdfDownloadButton').data().faculty);

        doc.setFontType('bold');
        doc.text(15, 46, 'Konto: ');
        doc.setFontType('normal');
        doc.text(29, 46, $('#pdfDownloadButton').data().facultyBankAccountNr);

        doc.setFontType('bold');
        doc.text(15, 52, 'Selgitus: ');
        doc.setFontType('normal');
        doc.text(32, 52, $('#pdfDownloadButton').data().fund.paymentExplanation);

        doc.setFontType('bold');
        doc.text(15, 64, 'Püsikorralduse vormistamisel jätta selgitus samaks.');

        doc.setFontType('normal');
        doc.text(15, 76, 'Detailsed pangarekvisiidid: ');
        doc.setFontType('bold');
        doc.text(15, 82, 'Pank:');
        doc.text(15, 88, 'SWIFT/BIC:');
        doc.text(15, 106, 'Arvutiteaduse instituudi arvelduskontole kantud annetuste pealt ei ole võimalik tagasi saada');
        doc.text(15, 112, 'tulumaksu. ');

        doc.line(15, 270, 195, 270);
        doc.setTextColor(0, 97, 175);
        doc.text(15, 274, 'http://www.cs.ut.ee/');
        doc.text(15, 280, 'https://www.facebook.com/ut.ics');
        doc.text(15, 286, 'ics@ut.ee');

        doc.save('Donation.pdf');
    });
};

var notFoundFunction = function (data) {
    alert('This API endpoint was not found!');
    console.log(data);
};

var validationFailedFunction = function (data) {
    var errorData = data.responseText.errors;
    alert(errorData);
    console.log(data);
};

$('#donationForm').on('submit', function (e) {
    e.preventDefault();

    var fieldValues = {};

    fieldValues['nameIsPublic'] = $('#nameIsPublic').is(':checked');
    fieldValues['name'] = $('#donorName').val();
    fieldValues['email'] = $('#donorEmail').val();
    fieldValues['additionalInformation'] = $('#additionalInformation').val();
    var fundName = $('#fundName').val();
    fieldValues['fund'] = $('.fundNameData').text(fundName).data().id;

    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/donation',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(fieldValues),
        dataType: JSON,
        statusCode: {
            201: successFunction,
            404: notFoundFunction,
            422: validationFailedFunction
        }
    })
});

