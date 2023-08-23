import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../actions/counterSlice';
import { fakeData } from './fakeData';

function Home(){
    const dispatch = useDispatch()
    console.log(fakeData)
    
    return(
        <div style={{padding: '0 200px'}}>
            <h1>Home</h1>
            <div>I'm going to try redux here to day with handling adding items into cart and updating the state for # of items in cart with price</div>
            {/* <div>
                <button
                aria-label="Increment value"
                onClick={() => dispatch(increment(30))}
                >
                    Increment 30
                </button>
                <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement(30))}
                >
                    Decrement 30
                </button>
            </div> */}
            <div>
                <div style={{marginTop: 20 }}>Items</div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                    {fakeData.map((item, index) => {
                        return (
                            <div style={{display: 'flex', margin: 20, border: '1px solid black', borderRadius: 4}} key={`${index} itemPos`}>
                                <div style={{width: '80%'}}>
                                    <div style={{display: 'flex' , justifyContent: 'space-between', marginRight: 10}}>
                                        <div>
                                            Product name:
                                        </div>
                                        <div>
                                            {item.name}
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginRight: 10}}>
                                        <div>
                                            Color:
                                        </div>
                                        <div>
                                            {item.color}
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginRight: 10}}>
                                        <div>
                                        Size:
                                        </div>
                                        <div>
                                            {item.size}
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginRight: 10}}>
                                        <div>
                                            Price:
                                        </div>
                                        <div>
                                            {item.price}
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <button style={{fontWeight: 700}}
                                    onClick={() => dispatch(increment(item))}
                                    >
                                        ADD
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;